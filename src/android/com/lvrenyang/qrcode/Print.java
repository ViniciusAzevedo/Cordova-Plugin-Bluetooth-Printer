package com.lvrenyang.qrcode;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class Print {
	
	public static void main(String args[]){
		
		List<QRData> qrDataList = new ArrayList<QRData>(1);
		qrDataList.add(new QRAlphaNum("219"));
		QRData[] dataArray = qrDataList.toArray(new QRData[qrDataList.size()]);
		
		QRCode qr = QRCode.getMinimumQRCode("219", ErrorCorrectLevel.M);
		
		
		byte[] b = QRCode.createData(1, ErrorCorrectLevel.M, dataArray);
		
		
		String str = new String(b, StandardCharsets.UTF_8);
		System.out.println(str);
		
		
		
	}
	
	public static byte[] getQRCodeBytes2Print(int typeNumber, int errorCorrectLevel, String content){
		List<QRData> qrDataList = new ArrayList<QRData>(1);
		qrDataList.add(new QRAlphaNum(content));
		QRData[] dataArray = qrDataList.toArray(new QRData[qrDataList.size()]);
		byte[] b = QRCode.createData(typeNumber, errorCorrectLevel, dataArray);
		return b;
		
		
	}
	
}
