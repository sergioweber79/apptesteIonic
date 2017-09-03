select * from tb_nfse_municipio limit 10;

select row_to_json(row(aliquota,ano)) from tb_nfse_municipio limit 10;


select row_to_json(row)
from (
   select * from tb_nfse_municipio limit 10
) row;


select row_to_json(row)
from (
   select tributacao_municipio,sum(iss_proprio) as total from tb_nfse_municipio group by tributacao_municipio limit 10
) row;