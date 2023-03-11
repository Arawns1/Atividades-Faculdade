import javax.swing.*;

public class Media {

	public static void main(String[] args) {
		int i; // declaração de variável de iteração
		double Num[], media, soma = 0; // declaração das variáveis reais
		Num = new double[50]; // Alocação de 50 posições para o vetor Num
		for(i = 0; i < 49; i++) { 
			Num[i] = Double.parseDouble(JOptionPane.showInputDialog("Digite um número:")); // Entrando com dados e atribuindo ao vetor na posição 'i'
			soma = soma + Num[i]; // Realizando a soma com esse novo valor, e atribuindo a variável soma
		}
		media = soma / 50; //Cálculo da média
		
        //Saída de dados  
  		System.out.println("A média das 50 notas digitadas é: " + media);
		System.exit(0);
	}
}