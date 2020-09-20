using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.BusinessLayer
{
    public class Teacher
    {
        [Required]
        public int TeacherId { get; set; }
        [Required]
        public string Name { get; set; }
       
        [Required]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime DOB { get; set; }
        [Required]
        public string Qualification { get; set; }
        [Required]
        public string FatherName { get; set; }
        [Required]
        public string MotherName { get; set; }
        [Required]
        public string Address { get; set; }
        
       
     
       
    }
}
