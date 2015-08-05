package fr.rooster.service;

import javax.inject.Inject;

import fr.rooster.model.dao.IHelloWorldDao;

/**
 * Hello World Services
 * @author Hugo
 *
 */
public class HelloWorldService {
	@Inject
	private IHelloWorldDao helloWorldDao;
	
	/**
	 * Gets a message from the id
	 * @param id
	 * @return
	 */
	public String getMessageFromId(Integer id){
		return helloWorldDao.findMessageFromId(id);
	}
}
