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


	@Test
	void contextLoads() {
//		List<Computer> computers =computerRepository.findByProcessorContaining("Core I7");
//Set<String> listOfCoreAndGen= new TreeSet<>();
//		for(Computer computer : computers) {
//
//			if(computer.getProcessor().charAt(computer.getProcessor().indexOf('-')+1)=='1'){
//				listOfCoreAndGen.add(computer.getProcessor().substring(0,computer.getProcessor().indexOf('-')+3));
//			}else {
//				listOfCoreAndGen.add(computer.getProcessor().substring(0, computer.getProcessor().indexOf('-') + 2));
//			}
//
//		}
//		listOfCoreAndGen.forEach(System.out::println);
		//computers.forEach(System.out::println);
	}

}
