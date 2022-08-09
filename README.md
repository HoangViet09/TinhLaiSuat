<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tính lãi suất</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
</head>
<body>
    <div class="container">
        <h1 class="text-center">Tính toán khoản vay</h1>
        <span class="text-center">Trả trên nợ dư ban đầu</span>
        <form >
            <div class="row">
                <div class="col-4">
                    <div class="mb-3">
                        <label for="loan">Số tiền vay</label>
                        <input type="number" id="loan" class="form-control">
                    </div>
                </div>
                <div class="col-4">
                    <div class="mb-3">
                        <label for="months">Thời hạn vay</label>
                        <input type="number" id="months" class="form-control">
                    </div>
                </div>  
                <div class="col-4">
                    <div class="mb-3">
                        <label for="rate">Lãi suất cho vay</label>
                        <input type="number" id="rate" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="mb-3">
                        <label for="disbursementDate">Ngày giải ngân</label>
                        <input type="date" id="disbursementDate" class="form-control">
                    </div>
                </div>
                <div class="col-4">
                    <div class="mb-3">
                        <label for="interest">Số tiền lãi phải trả</label>
                        <input type="text" id="interest" class="form-control" readonly>
                    </div>
                </div>  
                <div class="col-4">
                    <div class="mb-3">
                        <label for="originalAndIterest">Số tiền gốc và lãi phải trả</label>
                        <input type="text" id="originalAndIterest" class="form-control" readonly>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-primary mb-5">
                    Tính khoản vay
                </button>
            </div>
        </form>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>kì trả nợ</th>
                    <th>trả gốc</th>
                    <th>trả lãi</th>
                    <th>trả gốc và lãi</th>
                    <th>số gốc còn lại</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <script src="./TinhLaiSuat.js"></script>
</body>
</html>
