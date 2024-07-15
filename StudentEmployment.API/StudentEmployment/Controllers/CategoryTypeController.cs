using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentEmployment.Data;
using StudentEmployment.Models;

namespace StudentEmployment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryTypeController : ControllerBase
    {
        private readonly DataContext _context;
        public CategoryTypeController(DataContext context)
        {
            _context = context;
        }
        // GET: api/CategoryTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryType>>> GetCategoryTypes()
        {
            if (_context.CategoryTypes == null)
            {
                return NotFound();
            }
            return await _context.CategoryTypes.ToListAsync();
        }
        // GET: api/CategoryTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryType>> GetCategoryType(int id)
        {
            if (_context.CategoryTypes == null)
            {
                return NotFound();
            }
            var categoryType = await _context.CategoryTypes.FindAsync(id);

            if (categoryType == null)
            {
                return NotFound();
            }
            return categoryType;
        }
        //// POST api/CategoryTypes
        //[HttpPost]
        //public async Task<ActionResult<CategoryType>> PostCategoryType(CategoryType categoryType)
        //{
        //    if (_context.CategoryTypes == null)
        //    {
        //        return Problem("Entity set 'DataContext.CategoryTypes' is null.");
        //    }
        //    _context.CategoryTypes.Add(categoryType);
        //    await _context.SaveChangesAsync();
        //    return CreatedAtAction("GetCategoryType", new { id = categoryType.CategoryTypeId }, categoryType);
        //}
        //// PUT: api/CategoryTypes/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutCategoryType(int id, CategoryType categoryType)
        //{
        //    if (id != categoryType.CategoryTypeId)
        //    {
        //        return BadRequest();
        //    }
        //    _context.Entry(categoryType).State = EntityState.Modified;
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CategoryTypeExists(id))
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
        //// DELETE: api/CategoryType/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteCategoryType(int id)
        //{
        //    if (_context.CategoryTypes == null)
        //    {
        //        return NotFound();
        //    }
        //    var categoryType = await _context.CategoryTypes.FindAsync(id);
        //    if (categoryType == null)
        //    {
        //        return NotFound();
        //    }
        //    _context.CategoryTypes.Remove(categoryType);
        //    await _context.SaveChangesAsync();
        //    return NoContent();
        //}
        //private bool CategoryTypeExists(int id)
        //{
        //    return (_context.CategoryTypes?.Any(e => e.CategoryTypeId == id)).GetValueOrDefault();
        //}
    }
}