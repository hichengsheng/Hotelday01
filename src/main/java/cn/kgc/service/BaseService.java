package cn.kgc.service;

import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * @ClassName BaseService
 * @Description TODO 基础公共业务层接口
 * @Author zhaojing
 * @Date 2021/5/6 10:49
 * @Version 1.0
 */
public interface BaseService<T> {

    //分页查询数据
    Map<String, Object> findTByPage(Integer page, Integer limit);

    //根据条件进行分页查询数据
    Map<String, Object> findTByPageAndParams(Integer page, Integer limit, T t);

    //根据主键id删除信息
    String removeTById(Integer id);

    // 根据多个主键id批量删除数据
    String removeBatchTByIds(Integer[] ids);

    //保存数据
    String saveT(T t);

    //动态修改数据
    String modifyT(T t);

    //查询所有的数据
    List<T> findTAll();
}
