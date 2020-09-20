using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.BusinessLayer
{
    public class Student
    {
        [Required]
        public int StudentId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string FatherName { get; set; }
        [Required]
        public string MotherName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string RollNo { get; set; }
        [Required]
        public int ClassId { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime DOB { get; set; }

        [ForeignKey("ClassId")]
        public virtual Classes Classes { get; set; }
    }
}
