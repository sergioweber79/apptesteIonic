select * from tb_nfse_municipio limit 10;

select row_to_json(row(aliquota,ano)) from tb_nfse_municipio limit 10;


select row_to_json(row)
from (
   select * from tb_nfse_municipio limit 10
) row;

-- top 10 municipios tributacao 2016
select row_to_json(row)
from (
   select tributacao_municipio,sum(iss_proprio) as total from tb_nfse_municipio group by tributacao_municipio order by total desc limit 10
) row;

-- top 12 competencia 2016
select row_to_json(row)
from (
   select mesano_competencia,sum(iss_proprio) as total from tb_nfse_municipio group by mesano_competencia order by total desc limit 12
) row;


-- top 10 razaosocial 2016
select row_to_json(row)
from (
   select razaosocial_tomador,sum(iss_proprio) as total from tb_nfse_municipio group by razaosocial_tomador order by total desc limit 10
) row;
