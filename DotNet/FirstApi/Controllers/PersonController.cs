using FirstApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FirstApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {

        [HttpGet("/apis")]
        public IActionResult GetPeople()
        {
            return Ok(PersonOp.GetPeople());

        }

        [HttpPost("/api/create")]
        public IActionResult CreatePerson([FromForm] Person p)
        {
            PersonOp.CreateNew(p);
            return Created($"Created person with aadhar {p.Aadhar} successfull", p);
        }

        [HttpPut("/api/update/{aadhar}")]
        public IActionResult UpdatePerson([FromRoute] string aadhar, Person updatedP)
        {
            try
            {
                PersonOp.Update(aadhar, updatedP);
                return Ok("Update Successful");

            }
            catch (Exception e)
            {

                return NotFound(e.Message);
            }
            

        }

        [HttpDelete("/api/delete")] //Eg: https://localhost:7114/api/delete?aadhar=23456342
        public IActionResult DeletePerson([FromQuery] string aadhar) 
        {
            try
            {
                PersonOp.Delete(aadhar);
                return Ok("Deletion successful");

            }
            catch (Exception e)
            {

                return NotFound(e.Message);
            }
            

        }


    }
}
