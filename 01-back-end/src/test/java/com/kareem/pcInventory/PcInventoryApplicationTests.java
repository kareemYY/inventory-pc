package com.kareem.pcInventory;

import com.kareem.pcInventory.entity.Computer;
import com.kareem.pcInventory.repository.ComputerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Set;
import java.util.TreeSet;

@SpringBootTest
class PcInventoryApplicationTests {

	@Autowired
	private ComputerRepository computerRepository;


}
