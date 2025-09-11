#!/usr/bin/env bash
set +e

assets=(
	"Interface/Icons/*.blp"
#	"Character/*.blp"
	"Item/*.blp"
)

PREFIX="${WOW_DIR}"
OUTDIR_BLP="/home/Norvox/Documents/WOW_ICONS/blp"
OUTDIR_PNG="/home/Norvox/Documents/WOW_ICONS/png"	
CWD="."

count=0
count2=0
for asset in ${assets[@]}; do
	while read MPQ; do
		rel=${MPQ#"$PREFIX"}
		echo $MPQ | xargs -n50 -P$(nproc) -I MPQ MPQExtractor MPQ -e "$asset" -o "$OUTDIR_BLP" >/dev/null 2>&1
		echo "$rel";
		((count++))
	done < <(find "$WOW_DIR" -name "*.MPQ")
	echo "Total BLP extracted: ${count}"
	echo "Extracted BLP Finished..."
	sleep 10
	clear
	echo "Now Convert all to PNG"
	while read BLP; do		
		rel=${BLP#"$OUTDIR_BLP"}
		BLPConverter "$OUTDIR_BLP/$BLP" -o "$OUTDIR_PNG" >/dev/null 2>&1 | xargs -n20 -P$(nproc) echo  "✔️${count2} - ${rel%.*}.png"
		((count2++))
	done < <(ls "$OUTDIR_BLP")
done
