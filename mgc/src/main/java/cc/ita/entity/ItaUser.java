package cc.ita.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * (ItaUser)实体类
 *
 * @author makejava
 * @since 2022-11-05 21:47:47
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ItaUser implements Serializable {
    private static final long serialVersionUID = 1L;

    public ItaUser(String username, String cloudid, String avater, String money) {
        this.username = username;
        this.cloudid = cloudid;
        this.avatar = avater;
        this.money = money;
    }

    private String username;
    
    private Long id;
    
    private String cloudid;
    
    private String avatar;
    
    private String money;
    private String address;
    private String qq;
    private String phone;
    private int no=0;

    public ItaUser(String username, String cloudid, String avater, String money, String address, String qq, String phone, int no, String biography) {
        this.username = username;
        this.cloudid = cloudid;
        this.avatar = avater;
        this.money = money;
        this.address = address;
        this.qq = qq;
        this.phone = phone;
        this.no = no;
        this.biography = biography;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    private String biography;

    public ItaUser(String username, String cloudid, String avater, String money, String address, String qq, String phone, int no) {
        this.username = username;
        this.cloudid = cloudid;
        this.avatar = avater;
        this.money = money;
        this.address = address;
        this.qq = qq;
        this.phone = phone;
        this.no = no;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public ItaUser(String username, String cloudid, String avater, String money, int no) {
        this.username = username;
        this.cloudid = cloudid;
        this.avatar = avater;
        this.money = money;
        this.no = no;
    }


    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long  getId() {
        return id;
    }

    public void setId(Long  id) {
        this.id = id;
    }

    public String getCloudid() {
        return cloudid;
    }

    public void setCloudid(String cloudid) {
        this.cloudid = cloudid;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avater) {
        this.avatar = avater;
    }

    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }

}

