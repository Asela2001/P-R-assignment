import Student from "../models/student.js";

export const getStudent = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 }); // Use 'await' to execute the query
        res.status(200).json(students); // Send the retrieved documents
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ message: error.message });
    }
};

export const getTargetStudent = async (req,res) => {
    try {
       const targetStudent = await Student.findById(req.params.id);
        if (!targetStudent) {
            return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(targetStudent); 
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ message: error.message });
    }
    
}

export const createStudent = async (req, res) => {
  try {
    const { name, email, telephone,stream, course, grade } = req.body;
    const newStudent = new Student({ name, email, telephone, stream, course, grade });
    await newStudent.save();
    res.status(201).json({ message: "Student Created Successfully!" });
  } catch (error) {
    console.log("Error creating student!", error);
    res.status(500).json({ message: "Internal server error: " + error.message });
  }
};

export const updateStudent = async (req, res) => {
    try {
        const { name, email, telephone,stream, course, grade } = req.body;
        const updateStudent = await Student.findByIdAndUpdate(
            req.params.id,
            {name, email, telephone, stream, course, grade},
            {new: true}
        )
        if(!updateStudent){
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json("update Student successfully");
    } catch (error) {
        console.log("Error creating student!", error);
        res.status(500).json({ message: "Internal server error: " + error.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!deleteStudent){
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json("Student delete successfully");
    } catch (error) {
        console.log("Error creating student!", error);
        res.status(500).json({ message: "Internal server error: " + error.message });
    }
};