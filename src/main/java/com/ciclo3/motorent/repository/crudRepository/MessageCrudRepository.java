/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ciclo3.motorent.repository.crudRepository;

import com.ciclo3.motorent.model.Message;
import org.springframework.data.repository.CrudRepository;
public interface MessageCrudRepository extends CrudRepository<Message,Integer> {
    
}
