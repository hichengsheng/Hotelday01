package cn.kgc.domain;

import lombok.Data;

@Data
public class Authority {
    private Integer id;

    private String authorityName;

    private String authorityUrl;

    private Integer parent;

    private String flag;
}