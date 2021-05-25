package cn.kgc.dao;

import cn.kgc.domain.Roomsale;

public interface RoomsaleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Roomsale record);

    int insertSelective(Roomsale record);

    Roomsale selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Roomsale record);

    int updateByPrimaryKey(Roomsale record);
}