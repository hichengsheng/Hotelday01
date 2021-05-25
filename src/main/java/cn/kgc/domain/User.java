package cn.kgc.domain;

import lombok.Data;

import java.util.Date;
@Data
public class User {
    private Integer id;

    private String username;

    private String pwd;

    private Date createDate;

    private String useStatus;

    private String isAdmin;

    private Integer roleId;
}