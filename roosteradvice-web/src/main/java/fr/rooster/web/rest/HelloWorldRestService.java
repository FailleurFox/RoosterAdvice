package fr.rooster.web.rest;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import fr.rooster.services.HelloWorldService;

/**
 * Hello World services
 * @author Hugo
 *
 */
@Path("/helloworld")
public class HelloWorldRestService {
	@Inject
	private HelloWorldService helloWorldService;
	
	/**
	 * Gets a message from the id
	 * @param id
	 * @return
	 */
	@GET
	@Path("/{id}")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getMessageFromId(@PathParam("id") Integer id){
		return Response.ok(helloWorldService.getMessageFromId(id)).build();
	}
}
