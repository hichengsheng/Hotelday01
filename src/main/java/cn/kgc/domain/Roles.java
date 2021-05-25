package cn.kgc.domain;

import lombok.Data;

import java.util.Date;
@Data
public class Roles {
    private Integer id;

    private String roleName;

    private Date createDate;

    private String status;

    private String flag;

}