package com.springtest.repositories;

import com.springtest.Models.Group;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface GroupRepository extends MongoRepository<Group, String> {
    public Optional<Group> findByPolytechId(String polytechId);
}
