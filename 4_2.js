//Дан целочисленный массив размера N. 
//Увеличить все четные числа, содержащиеся в массиве, 
//на исходное значение первого четного числа. 
//Если четные числа в массиве отсутствуют, 
//то оставить массив без изменений.
let N = 8;
let array = [1, -5, 10, 10, 3, 8, -9, 7];
let count = 0;
let first_even_number = 0;

for (i = 0; i < N; i++){
	if ((array[i] % 2 == 0) && (count == 0)){
		first_even_number += array[i];
		count = 1;
	}else if ((array[i] % 2 == 0) && (count >= 1)){
		array[i] += first_even_number;
		count += 1;
	}
}
if (count == 0){
	alert("Чётные числа не найдены");
}else if (count >= 1){
	alert(array);
}
