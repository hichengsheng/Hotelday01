package cn.kgc.domain;

import lombok.Data;

import java.util.Date;
@Data
public class Roomsale {
    private Integer id;

    private String roomNum;

    private String customerName;

    private Date startDate;

    private Date endDate;

    private Integer days;

    private Double roomPrice;

    private Double rentPrice;

    private Double otherPrice;

    private Double salePrice;

    private Double discountPrice;
}