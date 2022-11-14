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
public class loginController {
    @Resource
    private ItaUserService userService;

    @PostMapping("login")
    public ResponseEntity<ItaUser> login (@RequestBody
    @Validated ItaUser loginUser, BindingResult bindingResult) throws IOException{//登录功能
        List<ObjectError> allErrors=bindingResult.getAllErrors();
        allErrors.forEach(error->log.error("用户登录时校验失败:{}",error.getDefaultMessage()));
        if (allErrors.size()>0){
            return  ResponseEntity.status(500).build();
        }
        String cloudid=loginUser.getCloudid();
        System.out.println(cloudid);
        String key="openid";
        String res= HttpRequest.get("https://api.weixin.qq.com/sns/jscode2session?appid="+"wx7abe5258e05d9d65"+"&secret="+"4d767c1dafb9306869c92c6970f0f525"+"&js_code="+cloudid+"&grant_type=authorization_code").body();
        JSONObject obj= JSON.parseObject(res);
        String openid= (String) obj.get(key);
        System.out.println(openid);

        ItaUser user = userService.login(openid);
        return ResponseEntity.ok().body(user);
    }
    @GetMapping("username")
    public String  getUserByName(String  cloudid) {//获取用户名称
        return userService.getUserByName(cloudid);
    }
    @PutMapping("username")//修改用户名称
    public int updateByName(@RequestBody ItaUser user){
        return userService.updateByName(user);
    }
    @PutMapping("avatar")//修改头像
    public int updateByAvatar(@RequestBody ItaUser user){
        return userService.updateByAvatar(user);
    }
    @GetMapping("avatar")//获取头像
    public String getUserByAvatar(String cloudid){
        return userService.getUserByAvatar(cloudid);
    }
}
