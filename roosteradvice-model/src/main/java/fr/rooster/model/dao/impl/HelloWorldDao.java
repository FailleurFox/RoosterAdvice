package fr.rooster.model.dao.impl;

import fr.rooster.model.dao.IHelloWorldDao;

/**
 * Manipulate the messages of the database
 * @author Hugo
 *
 */
public class HelloWorldDao implements IHelloWorldDao{
	
	/**
	 * find a message from the id in the database
	 * @param id
	 * @return
	 */
	@Override
	public String findMessageFromId(Integer id) {
		return "Hello World !";
	}
}
