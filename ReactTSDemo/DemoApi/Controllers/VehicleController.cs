using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using DemoApi.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DemoApi.Controllers
{
    [Route("api/[controller]")]
    public class VehicleController : Controller
    {
        // GET: api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Vehicle> vehicles = new List<Vehicle>
            {
                new Vehicle
                {
                    Make = "Ford"
                }
            };

            return Ok(vehicles);
        }
    }
}
