package cc.ita.service.impl;

import cc.ita.entity.ItaUser;
import cc.ita.dao.ItaUserDao;
import cc.ita.service.ItaUserService;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestBody;

import javax.annotation.Resource;

/**
 * (ItaUser)表服务实现类
 *
 * @author makejava
 * @since 2022-11-05 21:47:48
 */
@Service("itaUserService")
public class ItaUserServiceImpl implements ItaUserService {
    @Resource
    private ItaUserDao itaUserDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public ItaUser queryById(Long  id) {
        return this.itaUserDao.queryById(id);
    }
    @Override
    public ItaUser queryByCloudId(String id) {
        return this.itaUserDao.queryByCloudId(id);
    }
    @Override
    public String getUserByName(String cloudid) {
        return this.itaUserDao.getUserByName(cloudid);
    }

    /**
     * 分页查询
     *
     * @param itaUser 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    @Override
    public Page<ItaUser> queryByPage(ItaUser itaUser, PageRequest pageRequest) {
        long total = this.itaUserDao.count(itaUser);
        return new PageImpl<>(this.itaUserDao.queryAllByLimit(itaUser, pageRequest), pageRequest, total);
    }

    /**
     * 新增数据
     *
     * @param itaUser 实例对象
     * @return 实例对象
     */
    @Override
    public ItaUser insert(ItaUser itaUser) {
        this.itaUserDao.insert(itaUser);
        return itaUser;
    }

    /**
     * 修改数据
     *
     * @param itaUser 实例对象
     * @return 实例对象
     */
    @Override
    public ItaUser update(ItaUser itaUser) {
        this.itaUserDao.update(itaUser);
        return this.queryById(itaUser.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Long  id) {
        return this.itaUserDao.deleteById(id) > 0;
    }

    @Override
    public ItaUser login(String cloudid) {
        ItaUser itaUser=queryByCloudId(cloudid);
        if(itaUser==null){
            ItaUser newUser =new ItaUser("微信用户",cloudid,"s","0","","","",0,"");
            insert(newUser);
            return  newUser;
        }
        else if(itaUser.getNo()==0){
            itaUser.setNo(1);
            updateByNo(itaUser);
            return itaUser;
        }
        else{
            return itaUser;
        }
    }

    private int updateByNo(ItaUser itaUser) {
        this.itaUserDao.updateByNo(itaUser);
        return 0;
    }

    @Override
    public void modifyUserByName(String cloudid) {
        ItaUser itaUser=queryByCloudId(cloudid);

    }

    @Override
    public int updateByName(ItaUser user) {
        this.itaUserDao.updateByName(user);
        return 0;
    }

    @Override
    public int updateByAvatar(ItaUser user) {
        this.itaUserDao.updateByAvatar(user);
        return 0;
    }

    @Override
    public String getUserByAvatar(String cloudid) {
            return this.itaUserDao.getUserByAvatar(cloudid);
    }

    @Override
    public String getUserByBiography(String cloudid) {
        return this.itaUserDao.getUserByBiography(cloudid);
    }

    @Override
    public int modifyByBiography(ItaUser user) {
        this.itaUserDao.modifyByBiography(user);
        return 0;
    }

    @Override
    public String getByUserIndex(String cloudid) {
        return this.itaUserDao.getByUserIndex(cloudid);
    }

    @Override
    public int modifyUserIndex(ItaUser user) {
        this.itaUserDao.modifyUserIndex(user);
        return 0;
    }

    @Override
    public String getByUserIntegral(String cloudid) {
        return this.itaUserDao.getByUserIntegral(cloudid);
    }

    @Override
    public ItaUser getUerAllIndex(String openid) {
        if(openid==null){
            return null;
        }
        ItaUser itaUser=queryByCloudId(openid);
        if(itaUser==null){
            return null;
        }

        return itaUser;
    }
}
