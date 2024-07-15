using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentEmployment.Data;
using StudentEmployment.Models;
using StudentEmployment.Models.DTO;

namespace StudentEmployment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext _context;
        public CityController(DataContext context)
        {
            _context = context;
        }
        // GET: api/Cities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<City>>> GetCities()
        {
            if (_context.Cities == null)
            {
                return NotFound();
            }
            return await _context.Cities.ToListAsync();
        }
        //// GET: api/Cities
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<City>>> GetCities(int regionId)
        //{
        //    if (_context.Cities == null)
        //    {
        //        return NotFound();
        //    }

        //    var city = _context.Cities.Where(
        //        c => c.RegionId == regionId).ToList();

        //    return Ok(city);
        //}
        // GET api/Cities/5
        [HttpPost("[action]")]
        public ActionResult GetCity(SearchCityDto searchCity)
        {
            if (_context.Cities == null)
            {
                return NotFound();
            }

            var city = _context.Cities.Where(
                c => c.RegionId == searchCity.RegionId).ToList();

            return Ok(city);
        }
        //// POST api/Cities
        //[HttpPost]
        //public async Task<ActionResult<City>> PostCity(City city)
        //{
        //    if (_context.Cities == null)
        //    {
        //        return Problem("Entity set 'DataContext.Cities' is null.");
        //    }
        //    _context.Cities.Add(city);
        //    await _context.SaveChangesAsync();
        //    return CreatedAtAction("GetCity", new { id = city.CityId }, city);
        //}
        //// PUT api/Cities/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutCity(int id, City city)
        //{
        //    if (id != city.CityId)
        //    {
        //        return BadRequest();
        //    }
        //    _context.Entry(city).State = EntityState.Modified;
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CityExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }
        //    return NoContent();
        //}
        //// DELETE api/Cities/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteCity(int id)
        //{
        //    if (_context.Cities == null)
        //    {
        //        return NotFound();
        //    }
        //    var city = await _context.Cities.FindAsync(id);
        //    if (city == null)
        //    {
        //        return NotFound();
        //    }
        //    _context.Cities.Remove(city);
        //    await _context.SaveChangesAsync();
        //    return NoContent();
        //}
        //private bool CityExists(int id)
        //{
        //    return (_context.Cities?.Any(exist => exist.CityId == id)).GetValueOrDefault();
        //}
    }
}