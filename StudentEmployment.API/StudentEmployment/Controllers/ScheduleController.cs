using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentEmployment.Data;
using StudentEmployment.Models;

namespace StudentEmployment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly DataContext _context;
        public ScheduleController(DataContext context)
        {
            _context = context;
        }
        // GET: api/Schedules
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Schedule>>> GetSchedules()
        {
            if (_context.Schedules == null)
            {
                return NotFound();
            }
            return await _context.Schedules.ToListAsync();
        }
        // GET api/Schedules/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Schedule>> GetSchedule(int id)
        {
            if (_context.Schedules == null)
            {
                return NotFound();
            }
            var schedule = await _context.Schedules.FindAsync(id);

            if (schedule == null)
            {
                return NotFound();
            }
            return schedule;
        }
        //// POST api/Schedules
        //[HttpPost]
        //public async Task<ActionResult<Schedule>> PostSchedule(Schedule schedule)
        //{
        //    if (_context.Schedules == null)
        //    {
        //        return Problem("Entity set 'DataContext.Schedules' is null.");
        //    }
        //    _context.Schedules.Add(schedule);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetSchedule", new { id = schedule.ScheduleId }, schedule);
        //}

        //// PUT api/Schedules/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutSchedule(int id, Schedule schedule)
        //{
        //    if (id != schedule.ScheduleId)
        //    {
        //        return BadRequest();
        //    }
        //    _context.Entry(schedule).State = EntityState.Modified;
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ScheduleExists(id))
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
        //// DELETE api/Schedules/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteSchedule(int id)
        //{
        //    if (_context.Schedules == null)
        //    {
        //        return NotFound();
        //    }
        //    var schedule = await _context.Schedules.FindAsync(id);
        //    if (schedule == null)
        //    {
        //        return NotFound();
        //    }
        //    _context.Schedules.Remove(schedule);
        //    await _context.SaveChangesAsync();
        //    return NoContent();
        //}
        //private bool ScheduleExists(int id)
        //{
        //    return (_context.Schedules?.Any(exist => exist.ScheduleId == id)).GetValueOrDefault();
        //}
    }
}
