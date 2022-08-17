const students = []

// Thêm SV

//Để lấy html node theo id
const getInputById = (id) => {
    return document.getElementById(id)
}

const test = (a) => {
    return a
}
//Để lấy giá trị theo id , hàm fc là hàm convert nếu có
const getValueById = (id, fc = a => a) => {
    return fc(document.getElementById(id).value)
}


// Dùng để chuẩn hóa tên
const convertName = (name) => {
    return name.split(' ').filter(Boolean).map(i => i[0].toUpperCase() + i.slice(1).toLowerCase()).join(' ')
}

const onClickAddStudent = () => {
    const name = getValueById('inputName')
    const age = getValueById('inputAge', parseInt)
    const address = getValueById('inputAddress')

    if (name === '' || age === null || address === '') {
        alert("Không được để trống 1 trong 3 trường")
        return
    }

    students.push({
        name,
        age,
        address
    })
}

const onClickShowStudent = () => {
    const listStudentNode = getInputById('student_list')
    // Xóa hết tất cả student ở list cũ
    while (listStudentNode.firstChild) {
        listStudentNode.removeChild(listStudentNode.firstChild);
    }

    // Duyệt từng học sinh trong danh sách
    students.forEach(student => {
        const studentNode = document.createElement('div')
        const { name, address, age } = student
        studentNode.innerHTML = `Tên: ${name} - Tuổi: ${age} - Địa chỉ:${address}`
        listStudentNode.appendChild(studentNode)
    })
}

students.sort()
const soSanhHocSinh = (a, b) => {
    if (a.name > b.name)
        return 1;
    else return -1
}
students.sort(soSanhHocSinh)