package cc.ita.service;

import cc.ita.entity.ItaUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * (ItaUser)表服务接口
 *
 * @author makejava
 * @since 2022-11-05 21:47:48
 */
public interface ItaUserService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    ItaUser queryById(Long  id);

    ItaUser queryByCloudId(String id);

    String getUserByName(String cloudid);

    /**
     * 分页查询
     *
     * @param itaUser 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    Page<ItaUser> queryByPage(ItaUser itaUser, PageRequest pageRequest);

    /**
     * 新增数据
     *
     * @param itaUser 实例对象
     * @return 实例对象
     */
    ItaUser insert(ItaUser itaUser);

    /**
     * 修改数据
     *
     * @param itaUser 实例对象
     * @return 实例对象
     */
    ItaUser update(ItaUser itaUser);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Long  id);

    ItaUser login(String cloudid);

    void modifyUserByName(String cloudid);

    int updateByName(ItaUser user);
    int updateByAvatar(ItaUser user);

    String getUserByAvatar(String cloudid);

    String getUserByBiography(String cloudid);

    int modifyByBiography(ItaUser user);

    String getByUserIndex(String cloudid);

    int modifyUserIndex(ItaUser user);

    String getByUserIntegral(String cloudid);

    ItaUser getUerAllIndex(String openid);
}
