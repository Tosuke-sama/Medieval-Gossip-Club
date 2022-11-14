package cc.ita.controller;

import cc.ita.entity.ItaUser;
import cc.ita.service.ItaUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@Slf4j
public class UserController {
    @Resource
    private ItaUserService userService;
    @GetMapping("user/biography")
    public String getByBiography(String cloudid){
        return userService.getUserByBiography(cloudid);
    }
    @PutMapping("user/biography")
    public int modifyBiography(@RequestBody ItaUser user){
        return userService.modifyByBiography(user);
    }
}
