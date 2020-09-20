using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolManagementSystem.Data.Migrations
{
    public partial class AssignTeacher : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AssignClassTeachers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherId = table.Column<int>(nullable: false),
                    ClassId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssignClassTeachers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AssignClassTeachers_Class_ClassId",
                        column: x => x.ClassId,
                        principalTable: "Class",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AssignClassTeachers_Teachers_TeacherId",
                        column: x => x.TeacherId,
                        principalTable: "Teachers",
                        principalColumn: "TeacherId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AssignClassTeachers_ClassId",
                table: "AssignClassTeachers",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_AssignClassTeachers_TeacherId",
                table: "AssignClassTeachers",
                column: "TeacherId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AssignClassTeachers");
        }
    }
}
