package fr.rooster.model.dao;

/**
 * Allows the manipulation of messages
 * 
 * @author Hugo
 *
 */
public interface IHelloWorldDao {
	
	/**
	 * find a message from the id in the database
	 * @param id
	 * @return
	 */
	public String findMessageFromId(Integer id);
}
