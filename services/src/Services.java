import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/services")
public class Services {


    @GET
    @Path("/getName")
    @Produces(MediaType.TEXT_PLAIN)
    public String getName() {

        return "Goku";
    }


}
