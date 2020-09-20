using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using SchoolManagementSystem.BusinessLayer;
using SchoolManagementSystem.Data;

namespace SchoolManagementSystem.Controllers
{
    public class AssignClassTeachersController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AssignClassTeachersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: AssignClassTeachers
        [Authorize]
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.AssignClassTeachers.Include(a => a.Classes).Include(a => a.Teacher);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: AssignClassTeachers/Details
        [Authorize]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var assignClassTeacher = await _context.AssignClassTeachers
                .Include(a => a.Classes)
                .Include(a => a.Teacher)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (assignClassTeacher == null)
            {
                return NotFound();
            }

            return View(assignClassTeacher);
        }

        // GET: AssignClassTeachers/Create
        [Authorize]
        public IActionResult Create()
        {
            ViewData["ClassId"] = new SelectList(_context.Class, "Id", "ClassName");
            ViewData["TeacherId"] = new SelectList(_context.Teachers, "TeacherId", "Name");
            return View();
        }

        // POST: AssignClassTeachers/Create
       
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> Create([Bind("Id,TeacherId,ClassId")] AssignClassTeacher assignClassTeacher)
        {
            if (ModelState.IsValid)
            {
                var ExistData = _context.AssignClassTeachers.Where(a => a.TeacherId == assignClassTeacher.TeacherId && a.ClassId == assignClassTeacher.ClassId).FirstOrDefault();
                if(ExistData==null)
                {
                    _context.Add(assignClassTeacher);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                else
                {
                    ViewData["ClassId"] = new SelectList(_context.Class, "Id", "ClassName", assignClassTeacher.ClassId);
                    ViewData["TeacherId"] = new SelectList(_context.Teachers, "TeacherId", "Name", assignClassTeacher.TeacherId);
                    ViewBag.Message = "This teacher already asign same class!!!!";
                    return View(assignClassTeacher);
                }
              
            }
            ViewData["ClassId"] = new SelectList(_context.Class, "Id", "ClassName", assignClassTeacher.ClassId);
            ViewData["TeacherId"] = new SelectList(_context.Teachers, "TeacherId", "Name", assignClassTeacher.TeacherId);
            return View(assignClassTeacher);
        }

        // GET: AssignClassTeachers/Edit
        [Authorize]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var assignClassTeacher = await _context.AssignClassTeachers.FindAsync(id);
            if (assignClassTeacher == null)
            {
                return NotFound();
            }
            ViewData["ClassId"] = new SelectList(_context.Class, "Id", "ClassName", assignClassTeacher.ClassId);
            ViewData["TeacherId"] = new SelectList(_context.Teachers, "TeacherId", "Name", assignClassTeacher.TeacherId);
            return View(assignClassTeacher);
        }

        // POST: AssignClassTeachers/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> Edit(int id, [Bind("Id,TeacherId,ClassId")] AssignClassTeacher assignClassTeacher)
        {
            if (id != assignClassTeacher.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(assignClassTeacher);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AssignClassTeacherExists(assignClassTeacher.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["ClassId"] = new SelectList(_context.Class, "Id", "ClassName", assignClassTeacher.ClassId);
            ViewData["TeacherId"] = new SelectList(_context.Teachers, "TeacherId", "Name", assignClassTeacher.TeacherId);
            return View(assignClassTeacher);
        }

        // GET: AssignClassTeachers/Delete
        [Authorize]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var assignClassTeacher = await _context.AssignClassTeachers
                .Include(a => a.Classes)
                .Include(a => a.Teacher)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (assignClassTeacher == null)
            {
                return NotFound();
            }

            return View(assignClassTeacher);
        }

        // POST: AssignClassTeachers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var assignClassTeacher = await _context.AssignClassTeachers.FindAsync(id);
            _context.AssignClassTeachers.Remove(assignClassTeacher);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AssignClassTeacherExists(int id)
        {
            return _context.AssignClassTeachers.Any(e => e.Id == id);
        }
    }
}
