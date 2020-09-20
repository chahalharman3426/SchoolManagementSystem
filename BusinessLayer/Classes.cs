using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.BusinessLayer
{
    public class Classes
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string ClassName { get; set; }

       
        public string Description { get; set; }
    }
}
