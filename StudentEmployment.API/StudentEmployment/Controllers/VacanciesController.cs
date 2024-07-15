using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using StudentEmployment.Data;
using StudentEmployment.Models;
using StudentEmployment.Models.DTO;

namespace StudentEmployment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacanciesController : ControllerBase
    {
        private readonly DataContext _context;
        public VacanciesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Vacanies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vacancy>>> GetVacancies()
        {
            if (_context.Vacancies == null)
            {
                return NotFound();
            }
            return await _context.Vacancies.ToListAsync();
        }
        // GET api/Vacancies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vacancy>> GetVacancy(int id)
        {
            if (_context.Vacancies == null)
            {
                return NotFound();
            }
            var vacancy = await _context.Vacancies.FindAsync(id);

            if (vacancy == null)
            {
                return NotFound();
            }

            return vacancy;
        }
        // POST api/Vacancies
        [HttpPost]
        public async Task<ActionResult<Vacancy>> PostVacancy(Vacancy vacancy)
        {
            if (_context.Vacancies == null)
            {
                return Problem("Entity set 'DataContext.Vacancies' is null.");
            }
            _context.Vacancies.Add(vacancy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVacancy", new { id = vacancy.VacancyId }, vacancy);
        }
        // PUT api/Vacancies/5
        [HttpPut]
        public async Task<ActionResult<List<Vacancy>>> UpdateVacancy(Vacancy vacancy)
        {
            var dbVacancy = await _context.Vacancies.FindAsync(vacancy.VacancyId);
            if (dbVacancy == null)
                return BadRequest("Vacancy not found.");

            var datechange = DateTime.Now;

            dbVacancy.JobTitle = vacancy.JobTitle;
            dbVacancy.CategoryTypeId = vacancy.CategoryTypeId;
            dbVacancy.RegionId = vacancy.RegionId;
            dbVacancy.CityId = vacancy.CityId;
            dbVacancy.ScheduleId = vacancy.ScheduleId;
            dbVacancy.Experience = vacancy.Experience;
            dbVacancy.Salary = vacancy.Salary;
            dbVacancy.OtherRequirements = vacancy.OtherRequirements;
            dbVacancy.ContactName = vacancy.ContactName;
            dbVacancy.LastUpdate = datechange;
            dbVacancy.VacancyStatus = false;

            await _context.SaveChangesAsync();

            return Ok(await _context.Vacancies.ToListAsync());
        }
        [HttpPut("[action]")]
        public async Task<ActionResult<List<Vacancy>>> ChangeVacancy(Vacancy vacancy)
        {
            var dbVacancy = await _context.Vacancies.FindAsync(vacancy.VacancyId);
            if (dbVacancy == null)
                return BadRequest("Vacancy not found.");

            var datechange = DateTime.Now;

            dbVacancy.JobTitle = vacancy.JobTitle;
            dbVacancy.CategoryTypeId = vacancy.CategoryTypeId;
            dbVacancy.RegionId = vacancy.RegionId;
            dbVacancy.CityId = vacancy.CityId;
            dbVacancy.ScheduleId = vacancy.ScheduleId;
            dbVacancy.Experience = vacancy.Experience;
            dbVacancy.Salary = vacancy.Salary;
            dbVacancy.OtherRequirements = vacancy.OtherRequirements;
            dbVacancy.ContactName = vacancy.ContactName;
            dbVacancy.LastUpdate = datechange;
            dbVacancy.VacancyStatus = true; //vacancy.VacancyStatus;

            await _context.SaveChangesAsync();

            return Ok(await _context.Vacancies.ToListAsync());
        }
        // DELETE api/Vacancies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVacancy(int id)
        {
            if (_context.Vacancies == null)
            {
                return NotFound();
            }
            var vacancy = await _context.Vacancies.FindAsync(id);
            if (vacancy == null)
            {
                return NotFound();
            }
            _context.Vacancies.Remove(vacancy);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPost("[action]")]
        public ActionResult SearchVacancy(SearchVacancyDto searchVacancyDto)
        {
            if (_context.Vacancies == null)
            {
                return NotFound();
            }

            var vacancy = _context.Vacancies.Where(
                a => a.CategoryTypeId == searchVacancyDto.CategoryTypeId &&
                //a.JobTitle == searchVacancyDto.JobTitle &&
                a.ScheduleId == searchVacancyDto.ScheduleId &&
                a.Salary >= searchVacancyDto.Salary &&
                a.RegionId == searchVacancyDto.RegionId &&
                a.CityId == searchVacancyDto.CityId).ToList();

            return Ok(vacancy);
        }
    }
}