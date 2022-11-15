package cc.ita.controller;

import cc.ita.entity.ItaUser;
import cc.ita.service.ItaUserService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.github.kevinsawicki.http.HttpRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;

@RestController
@Slf4j
public class UserController {
    @Resource
    private ItaUserService userService;
    @GetMapping("user/biography")//获取个人信息
    public String getByBiography(String cloudid){
        return userService.getUserByBiography(cloudid);
    }
    @PutMapping("user/biography")//修改个性签名
    public int modifyBiography(@RequestBody ItaUser user){
        return userService.modifyByBiography(user);
    }
    @GetMapping("userindex")
    public String getByUserIndex(String cloudid){
        return userService.getByUserIndex(cloudid);
    }
    @PutMapping("userindex")//修改个性签名
    public int modifyUserIndex(@RequestBody ItaUser user){
        return userService.modifyUserIndex(user);
    }
    @GetMapping("userintegral")//获取货币信息
    public String getByUserIntegral(String cloudid){
        return userService.getByUserIntegral(cloudid);
    }
    @PostMapping("getuserindex")//获取用户所有信息
    public ResponseEntity getUserIndex (@RequestBody
                                          @Validated ItaUser loginUser, BindingResult bindingResult) throws IOException {//获取用户所有信息
        String openid=loginUser.getCloudid();
        if(openid==null){
            return  ResponseEntity.status(500).body("错误的openid");
        }
        ItaUser user = userService.getUerAllIndex(openid);
        return ResponseEntity.ok().body(user);
    }
}
