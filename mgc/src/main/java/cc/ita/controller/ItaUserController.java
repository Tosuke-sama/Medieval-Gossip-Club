package cc.ita.controller;

import cc.ita.entity.ItaUser;
import cc.ita.service.ItaUserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * (ItaUser)表控制层
 *
 * @author makejava
 * @since 2022-11-05 21:46:38
 */
@RestController
@RequestMapping("itaUser")
public class ItaUserController {
    /**
     * 服务对象
     */
    @Resource
    private ItaUserService itaUserService;

    /**
     * 分页查询
     *
     * @param itaUser 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    @GetMapping
    public ResponseEntity<Page<ItaUser>> queryByPage(ItaUser itaUser, PageRequest pageRequest) {
        return ResponseEntity.ok(this.itaUserService.queryByPage(itaUser, pageRequest));
    }

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("{id}")
    public ResponseEntity<ItaUser> queryById(@PathVariable("id") Long  id) {
        return ResponseEntity.ok(this.itaUserService.queryById(id));
    }

    /**
     * 新增数据
     *
     * @param itaUser 实体
     * @return 新增结果
     */
    @PostMapping
    public ResponseEntity<ItaUser> add(ItaUser itaUser) {
        return ResponseEntity.ok(this.itaUserService.insert(itaUser));
    }

    /**
     * 编辑数据
     *
     * @param itaUser 实体
     * @return 编辑结果
     */
    @PutMapping
    public ResponseEntity<ItaUser> edit(ItaUser itaUser) {
        return ResponseEntity.ok(this.itaUserService.update(itaUser));
    }

    /**
     * 删除数据
     *
     * @param id 主键
     * @return 删除是否成功
     */
    @DeleteMapping
    public ResponseEntity<Boolean> deleteById(Long id) {
        return ResponseEntity.ok(this.itaUserService.deleteById(id));
    }

}

