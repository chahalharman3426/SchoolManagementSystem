using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.BusinessLayer
{
    public class AssignClassTeacher
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [Display(Name ="Select Teacher")]
        public int TeacherId { get; set; }
        [Required]
        [Display(Name = "Select Class")]
        public int ClassId { get; set; }

        [ForeignKey("TeacherId")]
        public virtual Teacher Teacher { get; set; }

        [ForeignKey("ClassId")]
        public virtual Classes Classes { get; set; }

    }
}
