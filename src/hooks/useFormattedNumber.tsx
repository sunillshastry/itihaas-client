export default function useFormattedNumber(number: number) {
	return number < 10 && number !== 0 ? `0${number}` : number;
}
