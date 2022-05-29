#!/usr/bin/env bash

# Create a list of all files in the lib directory
CURRENTDIR=$(pwd)
SRC_LIB="/src/lib"
TARGET="${CURRENTDIR}/icon-list.md"
DIR_ARR=(
        'Buildings'
        'Business'
        'Communication'
        'Design'
        'Development'
        'Device'
        'Document'
        'Editor'
        'Finance'
        'Health'
        'Logos'
        'Map'
        'Media'
        'Others'
        'System'
        'User'
        'Weather'
    )

    cd "${CURRENTDIR}" || exit
    printf "# Icon List\n\n" > "${TARGET}"
    cd "${CURRENTDIR}/${SRC_LIB}" || exit
    for SUB in "${DIR_ARR[@]}"; do
      cd "${CURRENTDIR}/${SRC_LIB}/${SUB}" || exit
      ls -1 ./*.svelte >> "${TARGET}"
    done

    # remove ./ from each line of TARGET
    sed -i -e 's/\.\///g' "${TARGET}"
    # remove .svelte from each line of TARGET
    sed -i -e 's/\.svelte//g' "${TARGET}"

    echo "Completed"